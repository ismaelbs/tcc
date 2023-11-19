<?php

namespace App\Http\Controllers;

use App\Models\Questao;
use App\Models\Questionario;
use Inertia\Inertia;

class QuestionarioQuestoesController extends Controller
{
    public function index(Questionario $questionario)
    {
        return Inertia::render('QuestionarioQuestoes/Index', [
            'questionario' => $questionario,
            'questoesAdicionadas' => $questionario->questoes()->with('assunto')->get(), 
            'questoesAdicionaveis' => Questao::whereNotIn('id', $questionario->questoes->pluck('id'))->with('assunto')->get(),
        ]);
    }

    public function store(Questionario $questionario, Questao $questao)
    {
        $questionario->questoes()->attach($questao);

        return Inertia::location(route('questionario_questoes.index', $questionario));
    }

    public function destroy(Questionario $questionario, Questao $questao)
    {
        $questionario->questoes()->detach($questao);

        return Inertia::location(route('questionario_questoes.index', $questionario));
    }
}
