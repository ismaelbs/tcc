<?php

namespace App\Http\Controllers;

use App\Models\CorpoConhecimento;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CorpoConhecimentoController extends Controller
{
    public function create()
    {
        return Inertia::render('CorpoConhecimento/Index', [
            'corpo_conhecimentos' => CorpoConhecimento::all(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validateInput = $request->validate([
            'tema' => ['required', 'max:255', 'string'],
        ]);

        CorpoConhecimento::create($validateInput);
  
        return redirect(route('corpo_conhecimento.create'));
    }

    public function update(Request $request, CorpoConhecimento $corpoConhecimento): RedirectResponse
    {
        $validateInput = $request->validate([
            'tema' => ['required', 'max:255', 'string'],
        ]);

        $corpoConhecimento->update($validateInput);

        return redirect(route('corpo_conhecimento.create'));
    }

    public function disable(CorpoConhecimento $corpoConhecimento)
    {
        $corpoConhecimento->disable();
        return redirect(route('corpo_conhecimento.create'));
    }

    public function enable(CorpoConhecimento $corpoConhecimento)
    {
        $corpoConhecimento->enable();
        return redirect(route('corpo_conhecimento.create'));
    }
}
