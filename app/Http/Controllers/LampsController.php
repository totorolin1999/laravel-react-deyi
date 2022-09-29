<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Lamp;
use App\Models\Style;

class LampsController extends Controller
{
    public function getLampList()
    {
        try
        {
            // $lamps = Lamp::all();
            $lamps = Lamp::with('category', 'styles')->get();
            return response()->json($lamps);
        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }

    public function getLampDetails(Request $request)
    {
        try
        {
            $lampData = Lamp::findOrFail($request->get('lampId'));
            return response()->json($lampData);
        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }

    public function updateLampData(Request $request)
    {
        try
        {
            $lampId = $request->get('lampId');
            $lampName = $request->get('lampName');
            $lampDescription = $request->get('lampDescription');
            $lampPrice = $request->get('lampPrice');
            $lampCategory = $request->get('lampCategory');
            $lampStyle = $request->get('lampStyle');

            if($request->hasFile('lampImageName'))
            {
                $destination_path = 'public/images/products';
                $image = $request->file('lampImageName');
                $image_name = $image->getClientOriginalName();
                $path = $request->file('lampImageName')->storeAs($destination_path,$image_name);

            }

            Lamp::where('id', $lampId)->update([
                'name' => $lampName,
                'description' => $lampDescription,
                'image_name' => $image_name,
                'price' => $lampPrice,
                'category_id' => $lampCategory
            ]);

            $post->styles()->sync($lampStyle);

        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }

    public function destroy(Lamp $lamp)
    {
        try
        {
            $lamp->delete();
        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }

    public function store(Request $request)
    {
        try
        {
            $lampName = $request->get('lampName');
            $lampDescription = $request->get('lampDescription');
            // $lampImageName = $request->get('lampImageName');
            $lampPrice = $request->get('lampPrice');
            $lampCategory = $request->get('lampCategory');
            $lampStyle = $request->get('lampStyle');

            if($request->hasFile('lampImageName'))
            {
                $destination_path = 'public/images/products';
                $image = $request->file('lampImageName');
                $image_name = $image->getClientOriginalName();
                $path = $request->file('lampImageName')->storeAs($destination_path,$image_name);

            }

            $post = Lamp::create([
                'name' => $lampName,
                'description' => $lampDescription,
                // 'image_name' => $lampImageName,
                'image_name' => $image_name,
                'price' => $lampPrice,
                'category_id' => $lampCategory
            ]);

            $post->styles()->sync($lampStyle);

        }
        catch (Exception $e)
        {
            Log::error($e);
        }
    }
}
