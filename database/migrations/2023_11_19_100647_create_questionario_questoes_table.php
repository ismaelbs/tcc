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
        Schema::create('questionario_questoes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('questionario_id')->constrained('questionarios');
            $table->foreignId('questao_id')->constrained('questoes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questionario_questoes');
    }
};
