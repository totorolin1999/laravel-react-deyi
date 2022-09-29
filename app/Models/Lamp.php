<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Style;

class Lamp extends Model
{

    protected $fillable = [
        'name',
        'description',
        'image_name',
        'price',
        'category_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // protected $guarded=[];
    // protected $with=['styles'];
    public function styles(){
        return $this->belongsToMany(Style::class);
    }

}
