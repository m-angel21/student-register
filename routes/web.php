<?php

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Students', [
        'students' => Student::latest()->get(),
    ]);
})->name('students.index');

Route::post('/students', function (Request $request) {
    $validated = $request->validate([
        'full_name'  => 'required|string|max:120',
        'reg_number' => 'required|string|max:50|unique:students,reg_number',
        'program'    => 'required|string|max:100',
    ]);

    Student::create($validated);
    return back();
})->name('students.store');

Route::delete('/students/{student}', function (Student $student) {
    $student->delete();
    return back();
})->name('students.destroy');
