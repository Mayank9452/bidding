import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Camera, Phone, FileText, LogOut, Edit3, Check, X, ChevronRight, Shield } from "lucide-react";
import { TopBar } from "./TopBar";
import { BottomNavBar } from "./BottomNavBar";

export default function ProfilePage() {
    const [isEditingImage, setIsEditingImage] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState("user123");
    const [phoneNumber] = useState("+91 98765 43210");

    // Avatar options for user to choose from
    const avatarOptions = [
        "user123", "sarah", "alex", "mike", "emma",
        "john", "lisa", "david", "sophie", "chris"
    ];

    const handleSaveAvatar = () => {
        setIsEditingImage(false);
        // Here you would save to backend
    };

    const handleTermsClick = () => {
        console.log("Navigate to Terms of Use");
        // navigate("/terms");
    };

    const handleUnsubscribe = () => {
        console.log("Unsubscribe clicked");
        // Show confirmation dialog
    };

    return (
        <>
            <TopBar />
            <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 p-2">
                {/* Header Section */}
                <div className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-pink-600 pt-6 pb-32 px-3 overflow-hidden rounded-2xl">
                    {/* Animated Background */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl" />

                    <div className="relative z-10 max-w-md mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-2xl font-black text-white tracking-tight">My Profile</h1>
                        </div>

                        <p className="text-center text-white/80 text-xs font-medium">
                            Manage your account settings
                        </p>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="relative z-10 -mt-24 px-3 max-w-md mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Profile Image Section */}
                        <div className="relative pt-6 pb-4">
                            <div className="flex flex-col items-center">
                                {/* Avatar with Edit Button */}
                                <div className="relative mb-4">
                                    <motion.div className="relative">
                                        <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full p-1 shadow-xl">
                                            <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                                                <img
                                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedAvatar}`}
                                                    alt="Profile"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>

                                        {/* Edit Button */}
                                        <button
                                            onClick={() => setIsEditingImage(true)}
                                            className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
                                        >
                                            <Camera className="w-4 h-4 text-white" />
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Phone Number */}
                                <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-violet-100 shadow-sm">
                                    <Phone className="w-4 h-4 text-violet-600" />
                                    <span className="text-sm font-bold text-gray-800">{phoneNumber}</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-3 p-4 border-b border-gray-100">
                            <StatCard label="Bids" value="47" icon="🎯" />
                            <StatCard label="Wins" value="12" icon="🏆" />
                            <StatCard label="Points" value="3.4K" icon="⚡" />
                        </div>

                        {/* Action Buttons */}
                        <div className="p-4 space-y-2">
                            {/* Terms of Use */}
                            <button
                                onClick={handleTermsClick}
                                className="w-full flex items-center justify-between p-3.5 bg-gradient-to-r from-pink-50 to-rose-50 active:from-pink-100 active:to-rose-100 rounded-xl border-2 border-pink-600 transition-all duration-150 active:scale-[0.98]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-sm font-bold text-gray-800">Terms of Use</h3>
                                        <p className="text-[10px] text-gray-500 font-medium">Read our policies</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </button>

                            {/* Unsubscribe */}
                            <button
                                onClick={handleUnsubscribe}
                                className="w-full flex items-center justify-between p-3.5 bg-gradient-to-r from-gray-50 to-slate-50 active:from-gray-100 active:to-slate-100 rounded-xl border border-gray-200 transition-all duration-150 active:scale-[0.98]"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                                        <LogOut className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-sm font-bold text-gray-800">Unsubscribe</h3>
                                        <p className="text-[10px] text-gray-500 font-medium">Leave the service</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Account Info */}
                        {/* <div className="p-4 bg-gray-50 border-t border-gray-100">
                            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                <Shield className="w-3.5 h-3.5" />
                                <span className="font-medium">Account ID: #USER12345</span>
                            </div>
                        </div> */}
                    </div>

                    {/* Additional Info Card */}
                    <div className="mt-4 bg-white rounded-2xl shadow-md border border-gray-100 p-4">
                        <h3 className="text-sm font-bold text-gray-800 mb-3">Account Information</h3>
                        <div className="space-y-2.5">
                            <InfoRow label="Member Since" value="Dec 2024" />
                            <InfoRow label="Status" value="Active" badge />
                            <InfoRow label="Subscription" value="Premium Plan" />
                        </div>
                    </div>
                </div>

                {/* Avatar Selector Modal */}
                <AnimatePresence>
                    {isEditingImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end"
                            onClick={() => setIsEditingImage(false)}
                        >
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ type: "spring", damping: 25 }}
                                className="w-full bg-white rounded-t-3xl p-4 max-h-[70vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-gray-800">Choose Avatar</h2>
                                    <button
                                        onClick={() => setIsEditingImage(false)}
                                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center active:bg-gray-200"
                                    >
                                        <X className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>

                                {/* Avatar Grid */}
                                <div className="grid grid-cols-4 gap-3 mb-4">
                                    {avatarOptions.map((avatar) => (
                                        <button
                                            key={avatar}
                                            onClick={() => setSelectedAvatar(avatar)}
                                            className={`relative aspect-square rounded-2xl overflow-hidden transition-all active:scale-95 ${selectedAvatar === avatar
                                                    ? "ring-4 ring-pink-500 ring-offset-2"
                                                    : "ring-2 ring-gray-200"
                                                }`}
                                        >
                                            <img
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar}`}
                                                alt={avatar}
                                                className="w-full h-full"
                                            />
                                            {selectedAvatar === avatar && (
                                                <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                                                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                                    </div>
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Save Button */}
                                <button
                                    onClick={handleSaveAvatar}
                                    className="w-full bg-gradient-to-r from-pink-500 to-rose-600 active:from-pink-600 active:to-rose-700 text-white font-bold py-3 rounded-xl shadow-lg active:shadow-xl active:scale-[0.98] transition-all"
                                >
                                    Save Avatar
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <BottomNavBar />
        </>
    );
}

function StatCard({ label, value, icon }: any) {
    return (
        <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-xl p-1 text-center border border-gray-100 shadow-sm">
            <div className="bg-white rounded-xl">
                <div className="text-xl mb-1">{icon}</div>
                <p className="text-base font-black text-gray-800">{value}</p>
                <p className="text-[9px] text-gray-500 font-medium uppercase tracking-wider">{label}</p>
            </div>

        </div>
    );
}

function InfoRow({ label, value, badge = false }: any) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <span className="text-xs font-medium text-gray-600">{label}</span>
            {badge ? (
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-[10px] font-bold">
                    {value}
                </span>
            ) : (
                <span className="text-xs font-bold text-gray-800">{value}</span>
            )}
        </div>
    );
}