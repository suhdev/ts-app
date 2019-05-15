import * as React from 'react';
import {observable, action, computed} from 'mobx';
import { useObservable } from '../hooks';

type ProgressProps = {model:VE.IProgressBar};

export class ProgressModel implements VE.IProgressBar {
    persist() {
        localStorage.setItem('progress',JSON.stringify(
            {
                progress:this.progress,
                status:this.status,   
            }
        ));
    }
    restore() {
        const item = localStorage.getItem('progress');
        if (item){
            const {progress, status} = JSON.parse(item) as Partial<VE.IProgressBar>;
            this.status = status;
            this.progress = progress;
        }
    }

    @action.bound
    onStatusChange(status:string){
        this.status = status;
        this.progress = 0;
    }

    @observable.ref items: numbers[] = [1,2,3,4,5,6,7,8,9,10];

    @computed get divisibleByProgress(){
        return this.items.filter(e=>e%this.progress === 0);
    }

    @observable progress: number = 0;
    @observable status: string = '';
}

function useCache(model:VE.ICacheable){
    React.useEffect(()=>{
        model.restore();
        return ()=>{
            model.persist();    
        };
    },[model]);
}

export function Progress({model}:ProgressProps) {
    const [count, setCount] = React.useState(0);  
    const cb = React.useCallback((e:React.SyntheticEvent<HTMLInputElement>)=>{
        const text = e.currentTarget.value;
        model.onStatusChange(text);
    },[model]);
    useCache(model);
    

    return useObservable(()=>(
        <div className="ve-pbr">
            <input type="text" value={model.status} onChange={cb} />
        </div>
    ),[model,count]);
}