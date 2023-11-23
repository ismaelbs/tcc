<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionarioUsuario extends Model
{
    const STATUS_INICIADO = 1;
    const STATUS_FINALIZADO = 2;

    use HasFactory;

    protected $table = 'questionario_usuarios';

    protected $fillable = [
        'questionario_id',
        'usuario_id',
        'status',
        'data_inicio',
        'data_fim',
    ];

    public function questionario()
    {
        return $this->belongsTo(Questionario::class);
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    public function questionarioUsuarioRespostas()
    {
        return $this->hasMany(QuestionarioUsuarioResposta::class);
    }
}
