"use client";

import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaCheckCircle,FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import { Icon } from '@iconify/react';


interface LikeButtonProps {
  songId: string;
};

const LikeButton: React.FC<LikeButtonProps> = ({
  songId
}) => {
  const router = useRouter();
  const {
    supabaseClient
  } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSimpleLiked, setIsSimpleLiked] = useState<boolean>(false);
  const [hasShownMessage, setHasShownMessage] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }
  
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from('liked_songs')
        .select('*')
        .eq('user_id', user.id)
        .eq('song_id', songId)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    }

    fetchData();
  }, [songId, supabaseClient, user?.id]);

  const Icon = isLiked ? FaCheckCircle : AiOutlinePlus;

  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from('liked_songs')
        .delete()
        .eq('user_id', user.id)
        .eq('song_id', songId)

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(false);
      }
    } else {
      const { error } = await supabaseClient
        .from('liked_songs')
        .insert({
          song_id: songId,
          user_id: user.id
        });

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(true);
        toast.success('Added to your playlist');
      }
    }

    router.refresh();
  }
  const handleSimpleLike = () => {
    if (!isSimpleLiked) {
      toast.success('I like this song');
    }
    setIsSimpleLiked(!isSimpleLiked);
  }

  return (
    <>
    <button 
        className="
          cursor-pointer 
          hover:opacity-75 
          transition
          ml-4
        "
        onClick={handleSimpleLike}
      >
        <FaHeart 
          color={isSimpleLiked ? 'red' : 'white'} 
          size={20} 
        />
      </button>
      <button 
        className="
          cursor-pointer 
          hover:opacity-75 
          transition
        "
        onClick={handleLike}
      >
        <Icon color={isLiked ? 'green' : 'white'} size={25} />
        
      </button>
      
    </>
  );
}

export default LikeButton;