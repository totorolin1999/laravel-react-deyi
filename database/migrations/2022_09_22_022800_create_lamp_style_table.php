<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lamp_style', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("lamp_id");
            $table->unsignedBigInteger("style_id");
            $table->timestamps();

            $table->foreign("lamp_id")->references("id")->on("lamps")->onDelete("cascade");
            $table->foreign("style_id")->references("id")->on("styles")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lamp_style');
    }
};
