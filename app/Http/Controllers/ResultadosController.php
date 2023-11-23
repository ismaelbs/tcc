<?php

namespace App\Http\Controllers;

use App\Models\QuestionarioUsuario;
use Inertia\Inertia;

class ResultadosController extends Controller
{
    public function index()
    {
        $resultados = QuestionarioUsuario::with('questionarioUsuarioRespostas', 'questionario', 'questionarioUsuarioRespostas.questao')
            ->with('questionarioUsuarioRespostas.questao.respostas', 'questionarioUsuarioRespostas.resposta')
            ->with('questionarioUsuarioRespostas.questao.respostas.questao')
            ->where('usuario_id', auth()->user()->id)
            ->whereNot('data_fim', null)
            ->get();
        return Inertia::render('Resultados/Index', [
            'resultados' => $resultados,
        ]);
    }
}
