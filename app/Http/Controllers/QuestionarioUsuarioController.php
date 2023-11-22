<?php

namespace App\Http\Controllers;

use App\Models\Questionario;
use App\Models\QuestionarioUsuario;
use Inertia\Inertia;

class QuestionarioUsuarioController extends Controller
{
    public function iniciar(Questionario $questionario) {
        $questionarioUsuario = QuestionarioUsuario::where([
            'questionario_id' => $questionario->id,
            'usuario_id' => auth()->user()->id,
            'status' => QuestionarioUsuario::STATUS_INICIADO,
        ])->first();

        if ($questionarioUsuario) {
            return Inertia::render('QuestionarioUsuario/Index', [
                'questionarioUsuario' => $questionarioUsuario->load('questionario.questoes.respostas'),
            ]);
        }

        $questionarioUsuario = QuestionarioUsuario::create([
            'questionario_id' => $questionario->id,
            'usuario_id' => auth()->user()->id,
            'status' => QuestionarioUsuario::STATUS_INICIADO,
            'data_inicio' => now(),
        ]);

        return Inertia::render('QuestionarioUsuario/Index', [
            'questionarioUsuario' => $questionarioUsuario->load('questionario.questoes.respostas'),
        ]);
    }
}
