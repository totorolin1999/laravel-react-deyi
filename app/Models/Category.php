<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Lamp;

class Category extends Model
{
    protected $fillable = ['name'];

    public function lamps()
    {
        return $this->hasMany(Lamp::class);
    }
}
