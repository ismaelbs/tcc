<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Questao extends Model
{
    use HasFactory;

    protected $table = 'questoes';

    protected $fillable = [
        'enunciado',
        'assunto_id',
    ];

    public function assunto(): BelongsTo {
        return $this->belongsTo(Assunto::class);
    }
}
