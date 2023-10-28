<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CorpoConhecimento extends Model
{
    use HasFactory;

    protected $fillable = [
        'tema',
    ];
}
