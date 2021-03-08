<?php

namespace App\Configurations\models;

use Illuminate\Database\Eloquent\Model;

class BookingSource extends Model
{
    protected $table = 'cfg_init_booking_source';
    protected $primaryKey = 'code';
    protected $keyType = 'string';
    public $timestamps = false;
}
