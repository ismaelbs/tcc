<?php

namespace App\Http\Controllers;

use App\Models\Assunto;
use App\Models\Questao;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestaoController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create(Assunto $assunto)
    {
        return Inertia::render('Questao/Index', [
            'assunto' => $assunto,
            'questoes' => $assunto->questoes()->with('respostas')->with('dicas')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateInput = $request->validate([
            'enunciado' => ['required', 'string'],
            'assunto_id' => ['required', 'integer'],
        ]);

        Questao::create($validateInput);
  
        return redirect(route('questao.create', ['assunto' => $validateInput['assunto_id']]));
    }

    public function update(Request $request, Questao $questao): RedirectResponse
    {
        if (!$questao->enabled) {
            return redirect(route('questao.create', ['assunto' => $questao->assunto_id]));
        }

        $validateInput = $request->validate([
            'enunciado' => ['required', 'string'],
        ]);

        $questao->update($validateInput);

        return redirect(route('questao.create', ['assunto' => $questao->assunto_id]));
    }

    public function enable(Questao $questao): RedirectResponse
    {
        $questao->enable();
        return redirect(route('questao.create', ['assunto' => $questao->assunto_id]));
    }

    public function disable(Questao $questao): RedirectResponse
    {
        $questao->disable();
        return redirect(route('questao.create', ['assunto' => $questao->assunto_id]));
    }
}
