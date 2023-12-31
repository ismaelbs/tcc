<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Disciplina extends Model
{
    use HasFactory;

    protected $fillable = [
        'descricao',
        'corpo_conhecimento_id',
        'enabled'
    ];

    public function corpoConhecimento(): BelongsTo {
        return $this->belongsTo(CorpoConhecimento::class);
    }

    public function assuntos(): HasMany {
        return $this->hasMany(Assunto::class);
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
