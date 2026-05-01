import React, { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';

const CustomClockApp = () => {
  const [customZones, setCustomZones] = useState([]);
  const [newZoneName, setNewZoneName] = useState('');
  const [newZoneTz, setNewZoneTz] = useState('');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const commonTimeZones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Europe/Moscow',
    'Asia/Dubai',
    'Asia/Kolkata',
    'Asia/Bangkok',
    'Asia/Singapore',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Australia/Melbourne',
    'Pacific/Auckland',
  ];

  const addCustomZone = () => {
    if (newZoneName && newZoneTz) {
      setCustomZones([
        ...customZones,
        { name: newZoneName, tz: newZoneTz, id: Date.now() },
      ]);
      setNewZoneName('');
      setNewZoneTz('');
    }
  };

  const removeCustomZone = (id) => {
    setCustomZones(customZones.filter((zone) => zone.id !== id));
  };

  const getTimeInZone = (tz) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      return formatter.format(time);
    } catch {
      return 'Invalid';
    }
  };

  const getTimeInZone24 = (tz) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      return formatter.format(time);
    } catch {
      return 'Invalid';
    }
  };

  const getDateInZone = (tz) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        weekday: 'short',
        month: 'short',
        day: '2-digit',
      });
      return formatter.format(time);
    } catch {
      return 'Invalid';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">Custom Clock Manager</h1>
          <p className="text-purple-200">Add and manage custom time zones</p>
        </div>

        {/* Add Custom Zone Form */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Add Custom Time Zone</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Zone name (e.g., My Office)"
              value={newZoneName}
              onChange={(e) => setNewZoneName(e.target.value)}
              className="px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg placeholder-slate-400 focus:outline-none focus:border-purple-500 transition"
            />
            
            <select
              value={newZoneTz}
              onChange={(e) => setNewZoneTz(e.target.value)}
              className="px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-purple-500 transition"
            >
              <option value="">Select timezone...</option>
              {commonTimeZones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>

            <button
              onClick={addCustomZone}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
            >
              <Plus size={20} /> Add Zone
            </button>
          </div>

          <p className="text-slate-400 text-sm">
            Select from common timezones or enter a custom IANA timezone identifier
          </p>
        </div>

        {/* Custom Zones Display */}
        {customZones.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Your Time Zones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {customZones.map((zone) => (
                <div
                  key={zone.id}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 relative"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => removeCustomZone(zone.id)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-red-400 transition"
                  >
                    <X size={20} />
                  </button>

                  {/* Zone Name */}
                  <h3 className="text-white font-bold text-lg mb-2 pr-8">{zone.name}</h3>
                  <p className="text-slate-400 text-xs mb-4 font-mono">{zone.tz}</p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-purple-600 to-transparent mb-4" />

                  {/* Times */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-400 text-xs font-medium mb-1">12-Hour</p>
                      <p className="text-2xl font-mono font-bold text-purple-300">
                        {getTimeInZone(zone.tz)}
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-400 text-xs font-medium mb-1">24-Hour</p>
                      <p className="text-2xl font-mono font-bold text-cyan-300">
                        {getTimeInZone24(zone.tz)}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-700">
                      <p className="text-slate-400 text-xs font-medium mb-1">Date</p>
                      <p className="text-sm text-slate-300">{getDateInZone(zone.tz)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-800/30 border-2 border-dashed border-slate-600 rounded-xl p-12 text-center">
            <p className="text-slate-400 text-lg">No custom zones added yet</p>
            <p className="text-slate-500 text-sm mt-2">Add your first timezone to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomClockApp;
