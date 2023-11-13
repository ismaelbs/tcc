<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resposta extends Model
{
    use HasFactory;

    protected $table = 'respostas';

    protected $fillable = [
        'descricao',
        'correta',
        'questao_id',
    ];

    protected $casts = [
        'enabled' => 'boolean',
    ];
}
