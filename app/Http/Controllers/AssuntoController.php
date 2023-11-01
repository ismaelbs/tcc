<?php

namespace App\Http\Controllers;

use App\Models\Assunto;
use App\Models\Disciplina;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssuntoController extends Controller
{
    public function create(Disciplina $disciplina)
    {
        return Inertia::render('Assunto/Index', [
            'disciplina' => $disciplina->only(['id', 'descricao']),
            'assuntos' => $disciplina->assuntos()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validateInput = $request->validate([
            'descricao' => ['required', 'max:255', 'string'],
            'disciplina_id' => ['required', 'integer'],
        ]);
        Assunto::create($validateInput);
        return redirect(route('assunto.create', ['disciplina' => $validateInput['disciplina_id']]));
    }

    public function update(Request $request, Assunto $assunto)
    {
        if (!$assunto->enabled) {
            return redirect(route('assunto.create', [ 'disciplina' => $assunto->disciplina_id ]));
        }
        $validateInput = $request->validate([
            'descricao' => ['required', 'max:255', 'string'],
        ]);
        $assunto->update($validateInput);
        return redirect(route('assunto.create', [ 'disciplina' => $assunto->disciplina_id ]));
    }

    public function enable(Assunto $assunto)
    {
        $assunto->enable();
        return redirect(route('assunto.create', [ 'disciplina' => $assunto->disciplina_id ]));
    }

    public function disable(Assunto $assunto)
    {
        $assunto->disable();
        return redirect(route('assunto.create', [ 'disciplina' => $assunto->disciplina_id ]));
    }
}
