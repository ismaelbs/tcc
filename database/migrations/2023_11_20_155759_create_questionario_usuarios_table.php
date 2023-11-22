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
        Schema::create('questionario_usuarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('questionario_id')->constrained('questionarios');
            $table->foreignId('usuario_id')->constrained('users');
            $table->integer('status')->default(0);
            $table->dateTime('data_inicio')->nullable();
            $table->dateTime('data_fim')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questionario_usuarios');
    }
};
