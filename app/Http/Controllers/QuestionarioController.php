<?php

namespace App\Http\Controllers;

use App\Models\Questionario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionarioController extends Controller
{
    public function create()
    {
        return Inertia::render('Questionario/Index', [
            'questionarios' => Questionario::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validateInput = $request->validate([
            'descricao' => ['required', 'string'],
            'tempo' => ['required', 'date_format:H:i'],
        ]);
        Questionario::create($validateInput);
        return redirect(route('questionario.create'));
    }

    public function update(Request $request, Questionario $questionario)
    {
        $validateInput = $request->validate([
            'descricao' => ['required', 'string'],
            'tempo' => ['required', 'date_format:H:i'],
        ]);
        $questionario->update($validateInput);
        return redirect(route('questionario.create'));
    }

    public function disable(Questionario $questionario)
    {
        $questionario->update(['habilitado' => false]);
        return redirect(route('questionario.create'));
    }

    public function enable(Questionario $questionario)
    {
        $questionario->update(['habilitado' => true]);
        return redirect(route('questionario.create'));
    }
}
