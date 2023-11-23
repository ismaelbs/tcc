<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionarioUsuarioResposta extends Model
{
    use HasFactory;

    protected $table = 'questionario_usuario_respostas';

    protected $fillable = [
        'questionario_usuario_id',
        'questao_id',
        'resposta_id',
    ];

    public function questionarioUsuario()
    {
        return $this->belongsTo(QuestionarioUsuario::class);
    }

    public function questao()
    {
        return $this->belongsTo(Questao::class);
    }

    public function resposta()
    {
        return $this->belongsTo(Resposta::class);
    }

    public function getRespostaCorretaAttribute()
    {
        return $this->questao->respostas->where('correta', true)->first();
    }
}
