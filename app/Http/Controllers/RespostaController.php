<?php

namespace App\Http\Controllers;

use App\Models\Resposta;
use Illuminate\Http\Request;

class RespostaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateInput = $request->validate([
            'descricao' => ['required', 'string'],
            'assunto_id' => ['required', 'integer'],
            'correta' => 'boolean',
        ]);

        Resposta::create($validateInput);
  
        return redirect(route('questao.create', ['assunto' => $validateInput['assunto_id']]));
    }

    /**
     * Display the specified resource.
     */
    public function show(Resposta $resposta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resposta $resposta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resposta $resposta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resposta $resposta)
    {
        //
    }
}
