%SoA, delay, walking stickman
%05.10.2020
%Merve Erdogan


clear;
t = dir('C:\Users\merdogan19\Desktop\Soa_delay_bayes\bayes_geometric');

%importing data into tables
for sub = 1:length(t) %not to count matlab file
    Columns.Subject(sub).key_press = []; %columns order change among subjects.
    Columns.Subject(sub).response = [];
    Columns.Subject(sub).delay = [];
    SoA.Subject(sub).Data = [];
    all.Subject(sub).Data =[];
    if t(sub).name(end) ~= '.'
        all.Subject(sub).Data = importdata(t(sub).name);
    end
end
%to get colum number for related data

%reading headers
for subj = 1:length(t)
    if isempty(all.Subject(subj).Data) == 0
        for tit = 1:length(all.Subject(subj).Data.textdata(1,:))
            if ismember({'key_press.keys'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).key_press = tit;
            elseif ismember({'slider.response'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).response = tit;
            elseif ismember({'key_press.rt'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).key_pressRt = tit;
            elseif ismember({'delay1'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).delay1 = tit;
            elseif ismember({'delay2'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).delay2 = tit;
            elseif ismember({'delay3'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).delay3 = tit;
            elseif ismember({'group'} ,all.Subject(subj).Data.textdata(1,tit))
                Columns.Subject(subj).group = tit;
            end
        end
    end
end

%this analysis is canceled because the data is pooled although it is within
%subj 

% %for all data to use in SPSS
% Data1=[];
% Data2 =[];
% Data3 =[];
% for i = 1:length(t)
%     if isempty(all.Subject(i).Data) == 0
%         for cc = 1:length(all.Subject(i).Data.textdata)
%             if ~isnan(str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response)))
%                 if ismember('space',all.Subject(i).Data.textdata(cc,Columns.Subject(i).key_press)) %meaning that key is pressed
%                     if ismember('1',all.Subject(i).Data.textdata(cc,Columns.Subject(i).group)) %1st group
%                         Data1(end+1, 1) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).delay1));
%                         Data1(end, 2) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response));
%                     elseif ismember('2',all.Subject(i).Data.textdata(cc,Columns.Subject(i).group)) %1st group
%                         Data2(end+1, 1) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).delay2));
%                         Data2(end, 2) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response));
%                     elseif ismember('3',all.Subject(i).Data.textdata(cc,Columns.Subject(i).group)) %1st group
%                         Data3(end+1, 1) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).delay3));
%                         Data3(end, 2) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response));
%                     end
%                 end
%             end
%         end
%     end
% end

%putting data in different matrixes for each group
for i = 1:length(t)
    if isempty(all.Subject(i).Data) == 0
        DataInd.Group(1).data.Subject(i).Data = [];
        DataInd.Group(2).data.Subject(i).Data = [];
        DataInd.Group(3).data.Subject(i).Data = [];
        for cc = 1:length(all.Subject(i).Data.textdata)
            if ~isnan(str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response)))
                if ismember('space',all.Subject(i).Data.textdata(cc,Columns.Subject(i).key_press)) %meaning that key is pressed
                    if ismember('1',all.Subject(i).Data.textdata(cc,Columns.Subject(i).group)) %1st group
                        DataInd.Group(1).data.Subject(i).Data(end+1, 1) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).delay1));
                        DataInd.Group(1).data.Subject(i).Data(end, 2) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response));
                    elseif ismember('2',all.Subject(i).Data.textdata(cc,Columns.Subject(i).group)) %1st group
                       DataInd.Group(2).data.Subject(i).Data(end+1, 1) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).delay2));
                        DataInd.Group(2).data.Subject(i).Data(end, 2) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response));
                    elseif ismember('3',all.Subject(i).Data.textdata(cc,Columns.Subject(i).group)) %1st group
                        DataInd.Group(3).data.Subject(i).Data(end+1, 1) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).delay3));
                        DataInd.Group(3).data.Subject(i).Data(end, 2) = str2double(all.Subject(i).Data.textdata(cc,Columns.Subject(i).response));
                    end
                end
            end
        end
    end
end

%mean differences between each level in each group
meansInd1=[];
for i = 1:length(DataInd.Group(1).data.Subject)
    if isempty(DataInd.Group(1).data.Subject(i).Data) == 0
        meansInd1(end+1,1) = i;
        meansInd1(end, 2) = mean(DataInd.Group(1).data.Subject(i).Data(DataInd.Group(1).data.Subject(i).Data(:,1) == 0.2,2));
        meansInd1(end, 3) = mean(DataInd.Group(1).data.Subject(i).Data(DataInd.Group(1).data.Subject(i).Data(:,1) == 0.3,2));
        meansInd1(end, 4) = mean(DataInd.Group(1).data.Subject(i).Data(DataInd.Group(1).data.Subject(i).Data(:,1) == 0.45,2));     
    end
end

meansInd2=[];
for i = 1:length(DataInd.Group(2).data.Subject)
    if isempty(DataInd.Group(2).data.Subject(i).Data) == 0
        meansInd2(end+1,1) = i;
        meansInd2(end, 2) = mean(DataInd.Group(2).data.Subject(i).Data(DataInd.Group(2).data.Subject(i).Data(:,1) == 0.3,2));
        meansInd2(end, 3) = mean(DataInd.Group(2).data.Subject(i).Data(DataInd.Group(2).data.Subject(i).Data(:,1) == 0.45,2));
        meansInd2(end, 4) = mean(DataInd.Group(2).data.Subject(i).Data(DataInd.Group(2).data.Subject(i).Data(:,1) == 0.675,2));     
    end
end
meansInd3=[];
for i = 1:length(DataInd.Group(3).data.Subject)
    if isempty(DataInd.Group(3).data.Subject(i).Data) == 0
        meansInd3(end+1,1) = i;
        meansInd3(end, 2) = mean(DataInd.Group(3).data.Subject(i).Data(DataInd.Group(3).data.Subject(i).Data(:,1) == 0.45,2));
        meansInd3(end, 3) = mean(DataInd.Group(3).data.Subject(i).Data(DataInd.Group(3).data.Subject(i).Data(:,1) == 0.675,2));
        meansInd3(end, 4) = mean(DataInd.Group(3).data.Subject(i).Data(DataInd.Group(3).data.Subject(i).Data(:,1) == 1.0125,2));     
    end
end

%mean of ind. means for each level in the each group
meansTotal =[];

meansTotal(end+1,1) = mean(meansInd1(:,2)); %means for 1st group
meansTotal(end,2) = mean(meansInd1(:,3)); 
meansTotal(end,3) = mean(meansInd1(:,4)); 
meansTotal(end+1,1) = mean(meansInd2(:,2)); %means for 2nd group
meansTotal(end,2) = mean(meansInd2(:,3));
meansTotal(end,3) = mean(meansInd2(:,4));
meansTotal(end+1,1) = mean(meansInd3(:,2)); %means for 3rd group
meansTotal(end,2) = mean(meansInd3(:,3));
meansTotal(end,3) = mean(meansInd3(:,4));





bayes1 = meansTotal(1,:); %1st group
bayes2 = meansTotal(2,:); %2nd group
bayes3= meansTotal(3,:); %3rd group
x = 1:3;
xx =2:4;
xxx = 3:5;
plot(x,bayes1,'o')
xlabel('delays');
ylabel('Sense of Agency Rating');
hold on;
plot(xx,bayes2,'ro');
hold on;
plot(xxx,bayes3,'go');
legend('0.2-0.3-0.45','0.3-0.45-0.675','0.45-0.675-1.0125');

