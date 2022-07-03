import express, { Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Song } from '../entities/products/song';
import { dataSource } from '../dataSource';

const songRepo: Repository<Song> = dataSource.getRepository(Song);

module.exports.getProductById = async (req: Request, res: Response) => {
    console.log("alo");
    return res.status(200).send("Sucesso");
};

