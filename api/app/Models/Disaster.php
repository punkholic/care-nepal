<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disaster extends Model
{
    use HasFactory;
    
    protected $table = 'disaster';

    protected $fillable = [
        'name',
        'place',
        'longitude',
        'latitude',
    ];
        
}