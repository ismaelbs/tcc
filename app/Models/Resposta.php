<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function questao(): BelongsTo {
        return $this->belongsTo(Questao::class);
    }
}
