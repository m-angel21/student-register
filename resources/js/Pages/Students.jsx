import { useForm, router, Head } from '@inertiajs/react';

export default function Students({ students }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        full_name: '',
        reg_number: '',
        program: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/students', { onSuccess: () => reset() });
    };

    return (
        <>
            <Head title='Home' />
            
            <div className="min-h-screen bg-slate-50 p-4 max-w-md mx-auto">
                <h1 className="text-xl font-bold text-slate-800 mb-4">
                    Student Entry Test (Wasmer Edge)
                </h1>

                <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow-sm space-y-3 mb-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={data.full_name}
                            onChange={(e) => setData('full_name', e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 text-sm"
                        />
                        {errors.full_name && <p className="text-xs text-red-600 mt-1">{errors.full_name}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Reg Number (e.g. BSC/26/001)"
                            value={data.reg_number}
                            onChange={(e) => setData('reg_number', e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 text-sm"
                        />
                        {errors.reg_number && <p className="text-xs text-red-600 mt-1">{errors.reg_number}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Program (e.g. Computer Systems)"
                            value={data.program}
                            onChange={(e) => setData('program', e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 text-sm"
                        />
                        {errors.program && <p className="text-xs text-red-600 mt-1">{errors.program}</p>}
                    </div>

                    <button
                        disabled={processing}
                        className="w-full bg-emerald-600 text-white font-medium py-2 rounded-lg text-sm hover:bg-emerald-700"
                    >
                        {processing ? 'Saving...' : 'Add Student'}
                    </button>
                </form>

                <div className="space-y-2">
                    {students.map((s) => (
                        <div key={s.id} className="bg-white p-3 rounded-xl shadow-sm flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-sm text-slate-800">{s.full_name}</p>
                                <p className="text-xs text-slate-500">{s.reg_number} • {s.program}</p>
                            </div>
                            <button
                                onClick={() => router.delete(`/students/${s.id}`)}
                                className="text-xs text-red-600 font-medium px-2 py-1"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    {students.length === 0 && (
                        <p className="text-center text-xs text-slate-400">No students added yet.</p>
                    )}
                </div>
            </div>
        </>
    );
}
