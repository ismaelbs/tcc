<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Assunto extends Model
{
    use HasFactory;

    protected $fillable = [
        'descricao',
        'enabled',
        'disciplina_id'
    ];

    public function disciplina(): BelongsTo {
        return $this->belongsTo(Disciplina::class);
    }

    public function questoes() {
        return $this->hasMany(Questao::class);
    }

    public function disable() {
        $this->enabled = false;
        $this->save();
    }

    public function enable() {
        $this->enabled = true;
        $this->save();
    }
}
