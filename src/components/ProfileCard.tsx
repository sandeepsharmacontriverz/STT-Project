import React from 'react';
import { User } from "@/utils/common/person";
import { motion } from "framer-motion";
import Image from 'next/image';

interface ProfileCardProps {
    user: User | null;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-80 p-6 bg-white shadow-lg rounded-lg text-center"
        >
            {user && (
                <>
                    <img
                     className=" w-36 h-36 rounded-full mx-auto mb-4 object-cover"
                        src={user.profilePictureUrl}
                        width={500}
                        height={500}
                        alt={user.name}
                        
                    />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
                    <p className="text-lg text-gray-600 mb-4">{user.title}</p>
                    <div className="flex justify-center mb-6">
                        <div className="mr-6">
                            <p className="text-sm text-gray-600 font-semibold">Followers</p>
                            <p className="text-lg font-semibold">{user.followers}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 font-semibold">Following</p>
                            <p className="text-lg font-semibold">{user.following}</p>
                        </div>
                    </div>

                </>
            )
        }
        </motion.div>
    );
};

export default ProfileCard;