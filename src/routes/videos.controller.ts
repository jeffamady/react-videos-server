import {RequestHandler} from 'express';
import Video from './Videos';


export const createViedo: RequestHandler = async (req,res) => {
    // console.log(req.body); 
    const existedVideo = await Video.findOne({url: req.body.url});

    if (existedVideo) 
        return  res.status(301).json({message: "The URL already exists"})

    const video = new Video(req.body);
    const savedVideo = await video.save();
    return res.json(savedVideo);
    
}

export const getVideos: RequestHandler = async (req,res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.json(error);
    }
}

export const getVideo: RequestHandler = async (req,res) => {
    // console.log(req.params);
    // return res.json(req.params.id);
    const foundedVideo = await Video.findById(req.params.id);
    if(!foundedVideo) return res.status(204).json();
    return res.json(foundedVideo);
}

export const deleteVideo: RequestHandler = async (req,res) => {
    // res.json('deletind a video');
    const foundedVideo = await Video.findByIdAndDelete(req.params.id);
    if(!foundedVideo) return res.status(204).json();
    return res.json(foundedVideo);
}

export const updateVideo: RequestHandler = async (req,res) => {
    const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!updatedVideo) return res.status(204).json();
    res.json(updatedVideo);
}
