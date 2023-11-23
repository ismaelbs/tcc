<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('questionario_usuario_respostas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('questionario_usuario_id')->constrained('questionario_usuarios');
            $table->foreignId('questao_id')->constrained('questoes');
            $table->foreignId('resposta_id')->constrained('respostas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questionario_usuario_respostas');
    }
};
