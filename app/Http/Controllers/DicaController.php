<?php

namespace App\Http\Controllers;

use App\Models\Dica;
use App\Models\Questao;
use Illuminate\Http\Request;

class DicaController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Questao $questao)
    {
        $validateInput = $request->validate([
            'dica' => ['required', 'string'],
            'assunto_id' => ['required']
        ]);

        $questao->dicas()->create($validateInput);
  
        return redirect(route('questao.create', ['assunto' => $validateInput['assunto_id']]));
    }

    /**
     * Display the specified resource.
     */
    public function show(Dica $dica)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dica $dica)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dica $dica)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dica $dica)
    {
        //
    }
}
