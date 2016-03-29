
export function createProps(data: any) {
    return new SummaryProps(data);
}

class SummaryProps {

    data: any;
    pair: any;
    propMap: any;
    siblingMap: any;

    private progress = {
        'TotalActionPoints': 'TotalActionPointsCompleted',
        'TotalAgendaItems': 'TotalAgendaItemsPublished',
        'TotalAgendaMinutes':'TotalAgendaMinutesPublished',
        'TotalDocuments':'TotalDocumentsFinal',
        'TotalNewsItems': 'TotalNewsItemsPublished',
        'TotalParticipants':'TotalParticipantsAcknowledged'
    }

    constructor(data) {
        this.data = data;
        this.siblingMap = [];
        this.propMap = [];
        this.parseDataToProps();
    }

    parseDataToProps() {
        for (var key in this.data) {
            let parent = this.progress[key]
            if (parent) {
                this.createPair(key, parent)
            } else {
                this.siblingMap.push(key)
            }
        }
    }

    createPair(child, parent): void {
        this.propMap.push({ child, parent } )
    }

    getLabel(propName: string) {
        return this.propMap[propName].label;
    }
}

