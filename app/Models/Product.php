<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre', 'descripcion','precio', 'usuario','estado','tarjeta','address' ,'reporte', 'eventa' ,'usuariov', 'imagen'
    ];
    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/'.$value),
        );
    }
}
