<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Questao extends Model
{
    use HasFactory;

    protected $table = 'questoes';

    protected $fillable = [
        'enabled',
        'enunciado',
        'assunto_id',
    ];

    protected $casts = [
        'enabled' => 'boolean',
    ];

    public function assunto(): BelongsTo {
        return $this->belongsTo(Assunto::class);
    }

    public function respostas(): HasMany {
        return $this->hasMany(Resposta::class);
    }

    public function dicas(): HasMany {
        return $this->hasMany(Dica::class);
    }

    public function enable(): void {
        $this->enabled = true;
        $this->save();
    }

    public function disable(): void {
        $this->enabled = false;
        $this->save();
    }
}
