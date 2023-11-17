<?php

namespace App\Models;

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
        'tempo' => 'time'
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
}
