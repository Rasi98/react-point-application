import React, {useState} from "react";
import Grid from "@mui/material/Grid";

import Team from "./Team";
import {ITeam} from "../types/team";
import Button from "@mui/material/Button";
import ToggleButton from "./ToggleButton";

type LayoutProps = {
    handleDark: () => void;
    dark: boolean;
}
const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    const teamList = [
        {id: 1, name: 'A Team', points: 0},
        {id: 2, name: 'Pied-piper', points: 0},
        {id: 3, name: 'Noob pirates', points: 0},
        {id: 4, name: 'Team D', points: 0},
        {id: 5, name: 'Team E', points: 0}];

    const [team, setTeam] = useState<ITeam[]>(teamList);

    const handleAddPoint = (name: string, point: number, id: number) => {
        console.log("p:", point, "id:", id);
        const teamList: ITeam[] = team.slice();
        const index = teamList.findIndex((team: ITeam) => team.id === id);
        teamList.splice(index, 1, {name: name, points: point, id: id});
        setTeam(teamList);
    }

    const handleSubPoint = (name: string, point: number, id: number) => {
        console.log("p:", point, "id:", id);
        const teamList: ITeam[] = team.slice();
        const index = teamList.findIndex((team: ITeam) => team.id === id);
        teamList.splice(index, 1, {name: name, points: point, id: id});
        setTeam(teamList);
    }

    const renderTeams = () => {
        if (!team) {
            return;
        }
        return team.map((team: ITeam) =>
            <Team
                team={team}
                handleAddPoint={handleAddPoint}
                handleSubPoint={handleSubPoint}
                key={team.id}/>
        )
    }

    return (
        <Grid container>
            <Grid
                container
                justifyContent={'center'}
            >
                <Grid
                    item
                    style={{
                        marginBottom: '2%'
                    }}
                >
                    <h1>POINT TABLE</h1>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item
                >
                    <ToggleButton dark={props.dark} handleDark={props.handleDark}/>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent="space-evenly"
                columnSpacing={3}
                rowSpacing={3}
            >
                {renderTeams()}
            </Grid>
        </Grid>

    )
}
export default Layout;