<?php

namespace App\Http\Controllers;

use App\Models\Questionario;
use App\Models\QuestionarioUsuario;
use App\Models\QuestionarioUsuarioResposta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionarioUsuarioController extends Controller
{
    public function responder(Questionario $questionario) {
        $questionarioUsuario = QuestionarioUsuario::where([
            'questionario_id' => $questionario->id,
            'usuario_id' => auth()->user()->id,
            'status' => QuestionarioUsuario::STATUS_INICIADO,
        ])->first();

        if ($questionarioUsuario) {
            return Inertia::render('QuestionarioUsuario/Index', [
                'questionarioUsuario' => $questionarioUsuario->load(['questionario.questoes.respostas', 'questionario.questoes.dicas']),
            ]);
        }

        $questionarioUsuario = QuestionarioUsuario::create([
            'questionario_id' => $questionario->id,
            'usuario_id' => auth()->user()->id,
            'status' => QuestionarioUsuario::STATUS_INICIADO,
            'data_inicio' => now(),
        ]);

        return Inertia::render('QuestionarioUsuario/Index', [
            'questionarioUsuario' => $questionarioUsuario->load(['questionario.questoes.respostas', 'questionario.questoes.dicas']),
        ]);
    }

    public function finalizar(QuestionarioUsuario $questionarioUsuario, Request $request) {
        $data = $request->input('respostas', []);
        $questionarioUsuario->update([
            'status' => QuestionarioUsuario::STATUS_FINALIZADO,
            'data_fim' => now(),
        ]);
        QuestionarioUsuarioResposta::insert($data);
        return redirect()->route('resultados.index');
    }
}
