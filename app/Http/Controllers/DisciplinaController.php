<?php

namespace App\Http\Controllers;

use App\Models\CorpoConhecimento;
use App\Models\Disciplina;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DisciplinaController extends Controller
{
    public function create(CorpoConhecimento $corpoConhecimento)
    {
        return Inertia::render('Disciplina/Index', [
            'disciplinas' => $corpoConhecimento->disciplinas()->get(),
            'corpoConhecimento' => $corpoConhecimento->only(['id', 'tema'])
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validateInput = $request->validate([
            'descricao' => ['required', 'max:255', 'string'],
            'corpo_conhecimento_id' => ['required', 'integer'],
        ]);

        Disciplina::create($validateInput);
  
        return redirect(route('disciplina.create', ['corpoConhecimento' => $validateInput['corpo_conhecimento_id']]));
    }

    public function update(Request $request, Disciplina $disciplina): RedirectResponse
    {
        if (!$disciplina->enabled) {
            return redirect(route('disciplina.create', ['corpoConhecimento' => $disciplina->corpo_conhecimento_id]));
        }

        $validateInput = $request->validate([
            'descricao' => ['required', 'max:255', 'string'],
        ]);

        $disciplina->update($validateInput);

        return redirect(route('disciplina.create', ['corpoConhecimento' => $disciplina->corpo_conhecimento_id]));
    }

    public function enable(Disciplina $disciplina): RedirectResponse
    {
        $disciplina->enable();
        return redirect(route('disciplina.create', ['corpoConhecimento' => $disciplina->corpo_conhecimento_id]));
    }

    public function disable(Disciplina $disciplina): RedirectResponse
    {
        $disciplina->disable();
        return redirect(route('disciplina.create', ['corpoConhecimento' => $disciplina->corpo_conhecimento_id]));
    }
}
