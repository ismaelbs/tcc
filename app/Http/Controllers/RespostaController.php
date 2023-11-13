<?php

namespace App\Http\Controllers;

use App\Models\Resposta;
use Illuminate\Http\Request;

class RespostaController extends Controller
{
    const MAX_RESPOSTAS = 5;
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
            'questao_id' => ['required', 'integer'],
            'assunto_id' => ['required', 'integer'],
            'correta' => ['boolean'],
        ]);

        $count = Resposta::where('questao_id', $validateInput['questao_id'])->count();

        if ($count >= self::MAX_RESPOSTAS) {
            return redirect(route('questao.create', ['assunto' => $validateInput['assunto_id']]));
        }

        if ($validateInput['correta']) {
            Resposta::where('questao_id', $validateInput['questao_id'])->update(['correta' => false]);
        }

        Resposta::create($validateInput);
  
        return redirect(route('questao.create', ['assunto' => $validateInput['assunto_id']]));
    }

    public function markAsCorrect(Resposta $resposta)
    {
        Resposta::where('questao_id', $resposta->questao_id)->update(['correta' => false]);
        $resposta->correta = true;
        $resposta->save();
        return redirect(route('questao.create', ['assunto' => $resposta->questao->assunto_id]));
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
