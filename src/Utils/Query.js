import React from 'react';
import {firestore} from '../firebaseConfig'

export function Query({cate, onNext, onError}) {
    return firestore
        .collection('products')
        .where('cate', '==', cate)
        .onSnapshot(
            (snap) => {
                onNext && onNext(snap)
            },
            (error) => {
                onError && onError(error)
            }
        )
}

