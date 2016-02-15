'use strict';

import * as React from 'react';
import { expect } from 'chai';
import * as sinon from 'sinon';
import * as SummaryUtils from '../meeting-summary-utils';


let summaryObj = {
    TotalActionPoints: 2,
    TotalActionPointsCompleted: 0,
    TotalAgendaItems: 3,
    TotalAgendaItemsPublished: 3,
    TotalAgendaMinutes: 0,
    TotalAgendaMinutesPublished: 0,
    TotalDocuments: 0,
    TotalDocumentsFinal: 0,
    TotalNewsItems: 0,
    TotalNewsItemsPublished: 0,
    TotalParticipants: 8,
    TotalParticipantsAcknowledged: 3
};

describe('Meeting Summary Action Items', () => {

    it('label should be “Add action items” if no items present', () => {
        var props = SummaryUtils.createProps(summaryObj);
        expect(props.getLabel('TotalDocuments')).to.equal('Add action items');
        //expect(props.getStatus('TotalAgendaItems')).to.equal('blank');
    });

    it('should render “X of Y action items completed” if there are >= 1 action items and >= 1 have not been completed', () => {
        var props = SummaryUtils.createProps(summaryObj);
        expect(props.getLabel('TotalActionPoints')).to.equal('0 of 2 action items completed');
        //expect(props.getStatus('TotalAgendaItems')).to.equal('partdone');
    });

    it('should render “Y action items” if there are >= 1 actions items and all have been completed.', () => {
        var props = SummaryUtils.createProps(summaryObj);
        expect(props.getLabel('TotalAgendaItems')).to.equal('3 action items');
        //expect(props.getStatus('TotalAgendaItems')).to.equal('done');
    });
});

