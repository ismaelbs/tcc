<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CorpoConhecimento extends Model
{
    use HasFactory;

    protected $fillable = [
        'tema',
        'enabled'
    ];

    public function disable() {
        $this->enabled = false;
        $this->save();
    }

    public function enable() {
        $this->enabled = true;
        $this->save();
    }
}
