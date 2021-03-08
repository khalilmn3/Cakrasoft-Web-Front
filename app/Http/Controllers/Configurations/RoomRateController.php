<?php

namespace App\Http\Controllers\Configurations;

use App\Configurations\Models\ChargeFrequency;
use App\Configurations\Models\Market;
use App\Configurations\Models\Company;
use App\Configurations\Models\RoomRate;
use App\Configurations\Models\Account;
use App\Configurations\Models\RoomRateSubCategory;
use App\Configurations\Models\RoomType;
use App\Configurations\Models\SubDepartment;
use App\Configurations\Models\TaxService;
use App\Guest\models\GuestDetail;
use App\Http\Controllers\Controller;
use App\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Arr;
use Validator;

class RoomRateController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $mainTableName;
    private $joinTable1;
    private $joinTable2;
    private $joinTable3;
    private $joinTable4;
    private $joinTable5;

    public function __construct()
    {
        $this->mainTableName = 'cfg_init_room_rate';
        $this->joinTable1 = 'cfg_init_room_type';
        $this->joinTable2 = 'cfg_init_room_rate_sub_category';
        $this->joinTable3 = 'company';
        $this->joinTable4 = 'cfg_init_market';
        $this->joinTable5 = 'cfg_init_tax_and_service';
        $this->joinTable6 = 'const_charge_frequency';

    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules()
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            $query = DB::select(
                'CALL insert_'.$this->mainTableName.'(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                    $request->code, $request->name, $this->arrayValue($request->room_type_code), $request->from_date, $request->to_date, $this->notNull($request->sub_category_code), $this->notNull($request->company_code), $this->notNull($request->market_code),
                    $this->setEnum($request->is_rate_structure), $this->setEnum($request->is_compliment), $this->setEnum($request->include_breakfast), $request->weekday_rate1, $request->weekday_rate2, $request->weekday_rate3,$request->weekday_rate4,
                    $request->weekend_rate1, $request->weekend_rate2, $request->weekend_rate3, $request->weekend_rate4, $request->weekday_rate_child1, $request->weekday_rate_child2, $request->weekday_rate_child3,
                    $request->weekday_rate_child4, $request->weekend_rate_child1, $request->weekend_rate_child2, $request->weekend_rate_child3, $request->weekend_rate_child4, $this->notNull($request->tax_and_service_code),
                    $request->charge_frequency_code, $request->extra_pax, $this->setEnum($request->per_pax), $this->setEnum($request->include_chlid), $this->setEnum($request->day1), $this->setEnum($request->day2), $this->setEnum($request->day3), $this->setEnum($request->day4), $this->setEnum($request->day5), $this->setEnum($request->day6),
                    $this->setEnum($request->day7), $this->notNull($request->notes), $request->id_sort, $this->setEnum($request->is_active), $this->notNull($request->cm_inv_code), $this->setEnum($request->cm_stop_sell), $this->setEnum($request->is_online), $request->user_id
                ]
            );

            return response()->json([
                'room_rate_code' => $request->code
            ]);
        }
    }

    public function edit($id)
    {
        $query = RoomRate::find($id);

        return response()->json($query);
    }

    public function update(Request $request, $id)
    {
        $params= $request->all();

        $validator = Validator::make(
            $request->all(),
            array_merge(
                $this->getValidationRules(false)
            )
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 403);
        } else {
            $query = DB::select(
                'CALL update_'.$this->mainTableName.'(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                [
                    $request->code, $request->name, $this->arrayValue($request->room_type_code), $request->from_date, $request->to_date, $this->notNull($request->sub_category_code), $this->notNull($request->company_code), $this->notNull($request->market_code),
                    $this->setEnum($request->is_rate_structure), $this->setEnum($request->is_compliment), $this->setEnum($request->include_breakfast), $request->weekday_rate1, $request->weekday_rate2, $request->weekday_rate3,$request->weekday_rate4,
                    $request->weekend_rate1, $request->weekend_rate2, $request->weekend_rate3, $request->weekend_rate4, $request->weekday_rate_child1, $request->weekday_rate_child2, $request->weekday_rate_child3,
                    $request->weekday_rate_child4, $request->weekend_rate_child1, $request->weekend_rate_child2, $request->weekend_rate_child3, $request->weekend_rate_child4, $this->notNull($request->tax_and_service_code),
                    $request->charge_frequency_code, $request->extra_pax, $this->setEnum($request->per_pax), $this->setEnum($request->include_chlid), $this->setEnum($request->day1), $this->setEnum($request->day2), $this->setEnum($request->day3), $this->setEnum($request->day4), $this->setEnum($request->day5), $this->setEnum($request->day6),
                    $this->setEnum($request->day7), $this->notNull($request->notes), $request->id_sort, $this->setEnum($request->is_active), $this->notNull($request->cm_inv_code), $this->setEnum($request->cm_stop_sell),'0','0', $request->from_date, $request->to_date, $this->setEnum($request->is_online), $request->user_id
                ]
            );

            return response()->json([
                'success' => 'update item successfully'
            ]);
        }
    }

    public function delete(Request $request)
    {
        $params = $request->all();
        $user_id =  $params['user_id'];
        $id = $params['id'];
        $roomRate = GuestDetail::select('room_rate_code')->where('room_rate_code',$id)->first();

        $validator = Validator::make($params, [
            'id' => 'required|max:8',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 403);
        } else {
            if(empty($roomRate)){
                DB::select('call delete_' . $this->mainTableName . '(?,?)', array($id, $user_id));
                return 0;
            }else{
                return 1;
            }
        }

    }
    public function dataAgGrid(Request $request)
    {
        $filterList = [
				'cfg_init_room_rate.code',
				'cfg_init_room_rate.name',
				'cfg_init_room_type.name',
				'cfg_init_room_rate_sub_category.name',
				'company.name',
				'cfg_init_market.name',
				'cfg_init_room_rate.cm_inv_code',
				'cfg_init_tax_and_service.name',
                'cfg_init_room_rate.user_id',
        ];
        $search= $request->all();
        $limit = Arr::get($search, 'limit', 1000);
        $keyword = Arr::get($search, 'keyword', '');
        $searchBy = Arr::get($search, 'searchBy', '');
        $searchBy = is_numeric($searchBy) && $searchBy >= 0 && $searchBy < 9 ? $filterList[$searchBy] : '';

        $model = RoomRate::select(
            $this->mainTableName . '.code',
            $this->mainTableName . '.name',
            $this->mainTableName . '.from_date',
            $this->mainTableName . '.to_date',
            $this->mainTableName . '.is_rate_structure',
            $this->mainTableName . '.is_compliment',
            $this->mainTableName . '.include_breakfast',
            $this->mainTableName . '.weekday_rate1',
            $this->mainTableName . '.weekday_rate2',
            $this->mainTableName . '.weekday_rate3',
            $this->mainTableName . '.weekday_rate4',
            $this->mainTableName . '.weekend_rate1',
            $this->mainTableName . '.weekend_rate2',
            $this->mainTableName . '.weekend_rate3',
            $this->mainTableName . '.weekend_rate4',
            $this->mainTableName . '.weekday_rate_child1',
            $this->mainTableName . '.weekday_rate_child2',
            $this->mainTableName . '.weekday_rate_child3',
            $this->mainTableName . '.weekday_rate_child4',
            $this->mainTableName . '.weekend_rate_child1',
            $this->mainTableName . '.weekend_rate_child2',
            $this->mainTableName . '.weekend_rate_child3',
            $this->mainTableName . '.weekend_rate_child4',
            $this->mainTableName . '.extra_pax',
            $this->mainTableName . '.per_pax',
            $this->mainTableName . '.include_chlid',
            $this->mainTableName . '.day1',
            $this->mainTableName . '.day2',
            $this->mainTableName . '.day3',
            $this->mainTableName . '.day4',
            $this->mainTableName . '.day5',
            $this->mainTableName . '.day6',
            $this->mainTableName . '.day7',
            $this->mainTableName . '.notes',
            $this->mainTableName . '.id_sort',
            $this->mainTableName . '.is_active',
            $this->mainTableName . '.cm_inv_code',
            $this->mainTableName . '.cm_stop_sell',
            $this->mainTableName . '.is_cm_updated',
            $this->mainTableName . '.is_cm_updated_inclusion',
            $this->mainTableName . '.cm_start_date',
            $this->mainTableName . '.cm_end_date',
            $this->mainTableName . '.is_sent',
            $this->mainTableName . '.is_online',
            $this->mainTableName . '.user_id',
            $this->mainTableName . '.id_log',
            $this->mainTableName . '.room_type_code',
            $this->joinTable2 . '.name as sub_category',
            $this->joinTable3 . '.name as company',
            $this->joinTable4 . '.name as market',
            $this->joinTable5 . '.name as tax_and_service',
            $this->joinTable6 . '.name as charge_frequency')
            ->leftJoin($this->joinTable1, $this->mainTableName . '.room_type_code', $this->joinTable1 . '.code')
            ->leftJoin($this->joinTable2, $this->mainTableName . '.sub_category_code', $this->joinTable2 . '.code')
            ->leftJoin($this->joinTable3, $this->mainTableName . '.company_code', $this->joinTable3 . '.code')
            ->leftJoin($this->joinTable4, $this->mainTableName . '.market_code', $this->joinTable4 . '.code')
            ->leftJoin($this->joinTable5,  $this->mainTableName . '.tax_and_service_code',  $this->joinTable5 . '.code')
            ->leftJoin($this->joinTable6,  $this->mainTableName . '.charge_frequency_code',  $this->joinTable5 . '.code')
            ->orderBy($this->mainTableName . '.id_sort','ASC');

            if(!empty($keyword) && !empty($searchBy)){
                $model->where($searchBy, 'like', '%'.$keyword.'%');
            };

        return response()->json([
            'modelGrid' => $model->limit($limit)->get()
        ]);
    }

    public function dataLookUp(){
        $taxService= TaxService::select('code','name')->get();
        $chargeFreq= ChargeFrequency::select('code','name')->get();
        $company = Company::select('code','name')->get();
        $roomType = RoomType::select('code','name')->get();
        $subCategory = RoomRateSubCategory::select('code','name')->get();
        $market = Market::select('code','name')->get();
        $subDepartment = SubDepartment::select('code','name')->get();


        return response()->json([
            'tax_and_service' => $taxService,
            'charge_frequency' => $chargeFreq,
            'company' => $company,
            'room_type' => $roomType,
            'sub_category' => $subCategory,
            'market' => $market,
            'sub_department' => $subDepartment
        ]);
    }

    public function account(Request $request){


        $account= Account::select('code','name','sub_group_code');

            if(!empty($request->sub_department_code)){
                $account->where('sub_department_code','like','%'.$request->sub_department_code.'%');
            }else{
                $account->where('sub_department_code','like','%FRON%');
            }

            return response()->json($account->get());
    }


    private function getValidationRules($isNew = true)
    {
        return [
            'code' => $isNew ? 'required|max:8|unique:'.$this->mainTableName : 'required|max:8',
            'name' => 'required',
            'room_type_code' => 'required',
            'from_date' => 'date|required',
            'to_date' => 'date|required',
            'is_rate_structure' => 'required',
            'is_compliment' => 'required',
            'include_breakfast' => 'required',
            'weekday_rate1' => 'required',
            'weekday_rate2' => 'required',
            'weekday_rate3' => 'required',
            'weekday_rate4' => 'required',
            'weekend_rate1' => 'required',
            'weekend_rate2' => 'required',
            'weekend_rate3' => 'required',
            'weekend_rate4' => 'required',
            'weekday_rate_child1' => 'required',
            'weekday_rate_child2' => 'required',
            'weekday_rate_child3' => 'required',
            'weekday_rate_child4' => 'required',
            'weekend_rate_child1' => 'required',
            'weekend_rate_child2' => 'required',
            'weekend_rate_child3' => 'required',
            'weekend_rate_child4' => 'required',
            'tax_and_service_code' => 'nullable|exists:cfg_init_tax_and_service,code',
            'charge_frequency_code' => 'required',
            'day1' => 'required',
            'day2' => 'required',
            'day3' => 'required',
            'day4' => 'required',
            'day5' => 'required',
            'day6' => 'required',
            'day7' => 'required',
            'id_sort' => 'integer',
            'is_active' => 'required',
            'cm_stop_sell' => 'required',
            'is_online' => 'required',
            'user_id' => 'required'

        ];
    }
    private function setEnum($value){
        if($value == 'true'){
            $value = '-1';
        }else{
            $value = '0';
        }
        return $value;
    }

    private function notNull($value){
        return $value == '' ? ' ' : ($value == 'null' ? ' ' : $value);
    }

    private function arrayValue($value){
        $array = implode('|',$value);
        return $array;
    }
}
