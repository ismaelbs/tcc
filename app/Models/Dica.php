<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Dica extends Model
{
    use HasFactory;

    protected $fillable = [
        'questao_id',
        'dica'
    ];

    public function questao(): BelongsTo {
        return $this->belongsTo(Questao::class);
    }
}
