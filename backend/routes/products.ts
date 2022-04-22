import express, { Router, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { Song } from '../entities/products/song';
import { dataSource } from '../dataSource';
import { logger } from '../logger';

const router: Router = express.Router();
const songRepo: Repository<Song> = dataSource.getRepository(Song);

router.get('/product/:id', (req: Request, res: Response) => {
    res.json({
        code: 200,
        data: `Produto id: ${req.params.id}`,
    });
})

router.get('/songs', async (req: Request, res: Response) => {
    try {
        const songs = songRepo.find();
        return res.send(songs);
    } catch (e) {
        logger.error(e);
        return res.status(500);
    }
});

router.post('/song', async (req: Request, res: Response) => {
    try {
        const newSong = await songRepo.create(req.body),
            creation = await songRepo.save(newSong);
        return res.send(creation);
    } catch (e) {
        logger.error(e);
        return res.status(500).send(`Error on creation: ${e}`);
    }
});

export default router;
