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

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { User, Camera, Phone, FileText, LogOut, ChevronRight, Heart, Sparkles, Crown, ArrowRight } from "lucide-react";

// export default function ProfilePage() {
//     const [isEditingImage, setIsEditingImage] = useState(false);
//     const [selectedAvatar, setSelectedAvatar] = useState("user123");

//     const avatarOptions = ["user123", "sarah", "alex", "mike", "emma", "john", "lisa", "david"];

//     return (
//         <div className="min-h-screen bg-[#FFF5F7] pb-24 font-sans">
//             {/* Soft Pink Mesh Gradient Header */}
//             <div className="relative h-72 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-pink-500" />
//                 {/* Decorative Blobs */}
//                 <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute top-20 -left-20 w-48 h-48 bg-pink-300/30 rounded-full blur-2xl" />
                
//                 <div className="relative z-10 flex flex-col items-center pt-14">
//                     <motion.div 
//                         initial={{ opacity: 0, y: -10 }} 
//                         animate={{ opacity: 1, y: 0 }}
//                         className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full border border-white/30"
//                     >
//                         <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Member Profile</span>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Profile Content Card */}
//             <div className="relative z-20 -mt-32 px-5 max-w-md mx-auto">
//                 <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(255,182,193,0.3)] p-8 border border-pink-50">
                    
//                     {/* Avatar with Pink Glow */}
//                     <div className="flex flex-col items-center -mt-20">
//                         <div className="relative">
//                             <motion.div 
//                                 whileHover={{ scale: 1.05 }}
//                                 className="w-32 h-32 rounded-[2.5rem] p-1 bg-gradient-to-b from-white to-pink-200 shadow-2xl"
//                             >
//                                 <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden p-1">
//                                     <img
//                                         src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedAvatar}`}
//                                         alt="Profile"
//                                         className="w-full h-full object-cover bg-rose-50"
//                                     />
//                                 </div>
//                             </motion.div>
//                             <motion.button
//                                 whileTap={{ scale: 0.9 }}
//                                 onClick={() => setIsEditingImage(true)}
//                                 className="absolute -bottom-2 -right-2 w-11 h-11 bg-fuchsia-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-fuchsia-200 border-4 border-white"
//                             >
//                                 <Camera className="w-5 h-5" />
//                             </motion.button>
//                         </div>
                        
//                         <h2 className="mt-6 text-2xl font-black text-gray-800 tracking-tight">Sarah Jenkins</h2>
//                         <div className="mt-2 flex items-center gap-2 text-rose-500 font-semibold text-sm">
//                             <Sparkles className="w-4 h-4 fill-rose-500" />
//                             <span>Premium Explorer</span>
//                         </div>
//                     </div>

//                     {/* Pink Aesthetic Stats */}
//                     <div className="grid grid-cols-3 gap-3 mt-10">
//                         <StatBox label="Bids" value="47" icon={<Heart className="w-4 h-4" />} />
//                         <StatBox label="Wins" value="12" icon={<Crown className="w-4 h-4" />} />
//                         <StatBox label="Level" value="Gold" icon={<Sparkles className="w-4 h-4" />} />
//                     </div>

//                     {/* Action Rows */}
//                     <div className="mt-10 space-y-4">
//                         <PinkActionRow 
//                             icon={<FileText />} 
//                             title="Terms & Privacy" 
//                             color="bg-rose-500" 
//                         />
//                         <PinkActionRow 
//                             icon={<LogOut />} 
//                             title="Sign Out" 
//                             color="bg-gray-400" 
//                             isDanger
//                         />
//                     </div>
//                 </div>

//                 {/* Secondary Info Card */}
//                 <div className="mt-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden group">
//                     <div className="absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-125">
//                         <Crown className="w-20 h-20 text-white" />
//                     </div>
//                     <div className="relative z-10 text-white">
//                         <h3 className="font-bold text-lg mb-4">Subscription Status</h3>
//                         <div className="space-y-3 opacity-90">
//                             <div className="flex justify-between text-sm">
//                                 <span>Plan</span>
//                                 <span className="font-bold">Annual Diamond</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                                 <span>Renews</span>
//                                 <span className="font-bold">12 Oct 2026</span>
//                             </div>
//                         </div>
//                         <button className="mt-6 w-full py-3 bg-white text-rose-600 rounded-2xl font-bold text-sm flex items-center justify-center gap-2">
//                             Manage Billing <ArrowRight className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Pink-Themed Bottom Drawer */}
//             <AnimatePresence>
//                 {isEditingImage && (
//                     <>
//                         <motion.div 
//                             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//                             className="fixed inset-0 bg-rose-950/40 backdrop-blur-md z-50"
//                             onClick={() => setIsEditingImage(false)}
//                         />
//                         <motion.div 
//                             initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
//                             className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[3.5rem] z-50 p-10 shadow-2xl"
//                         >
//                             <div className="w-16 h-1.5 bg-rose-100 rounded-full mx-auto mb-8" />
//                             <h3 className="text-xl font-black text-gray-800 mb-8 text-center">Select New Avatar</h3>
//                             <div className="grid grid-cols-4 gap-4 mb-10">
//                                 {avatarOptions.map(avatar => (
//                                     <button 
//                                         key={avatar} 
//                                         onClick={() => setSelectedAvatar(avatar)}
//                                         className={`rounded-3xl p-1.5 transition-all ${selectedAvatar === avatar ? 'bg-rose-500 scale-110 shadow-lg shadow-rose-200' : 'bg-rose-50'}`}
//                                     >
//                                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar}`} className="rounded-2xl bg-white" alt="avatar" />
//                                     </button>
//                                 ))}
//                             </div>
//                             <button 
//                                 onClick={() => setIsEditingImage(false)}
//                                 className="w-full py-5 bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white rounded-3xl font-black shadow-xl shadow-rose-200 active:scale-[0.97] transition-transform"
//                             >
//                                 Save Changes
//                             </button>
//                         </motion.div>
//                     </>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }

// function StatBox({ icon, label, value }: any) {
//     return (
//         <div className="flex flex-col items-center p-4 rounded-3xl bg-rose-50/50 border border-rose-100/50">
//             <div className="text-rose-500 mb-1">{icon}</div>
//             <span className="text-lg font-black text-gray-800">{value}</span>
//             <span className="text-[9px] text-rose-400 font-bold uppercase tracking-widest">{label}</span>
//         </div>
//     );
// }

// function PinkActionRow({ icon, title, color, isDanger }: any) {
//     return (
//         <motion.button 
//             whileTap={{ scale: 0.98 }}
//             className={`w-full flex items-center justify-between p-5 rounded-[2rem] group transition-all ${
//                 isDanger ? 'bg-gray-50' : 'bg-rose-50 hover:bg-rose-100'
//             }`}
//         >
//             <div className="flex items-center gap-4">
//                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${color}`}>
//                     {icon}
//                 </div>
//                 <span className={`font-bold text-sm ${isDanger ? 'text-gray-500' : 'text-gray-800'}`}>{title}</span>
//             </div>
//             <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isDanger ? 'text-gray-300' : 'text-rose-300'}`} />
//         </motion.button>
//     );
// }