<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Lamp;

class Style extends Model
{

    public function lamps()
    {
        return $this->belongsToMany(Lamp::class);
    }
}
