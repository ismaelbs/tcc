<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questionario extends Model
{
    use HasFactory;

    protected $table = 'questionarios';

    protected $fillable = [
        'descricao',
        'habilitado',
        'tempo'
    ];

    protected $casts = [
        'habilitado' => 'boolean',
    ];

    public function enable()
    {
        $this->habilitado = true;
        $this->save();
    }

    public function disable()
    {
        $this->habilitado = false;
        $this->save();
    }

    protected function getTempoAttribute($value)
    {
        $format = "H:i";
        $datetime = new DateTime($value);
        return $datetime->format($format);
    }

    public function questoes() {
        return $this->belongsToMany(Questao::class, 'questionario_questoes', 'questionario_id', 'questao_id');
    }
}
