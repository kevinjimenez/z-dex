import { Transformation } from '@/core/interfaces/responses/character-response.interface';
import BaseButtonIcon from '@/shared/components/ui/BaseButtonIcon';
import BaseModal from '@/shared/components/ui/BaseModal';
import { useWindowDimensions, View } from 'react-native';
import TransformationPoster from '../components/TransformationPoster';
import TransformationStat from '../components/TransformationStat';
import TransformationTitle from '../components/TransformationTitle';

interface TransformationDetailModalProps {
  selected: Transformation | null;
  onPress: () => void;
}

const TransformationDetailModal = ({
  selected,
  onPress,
}: TransformationDetailModalProps) => {
  const { width } = useWindowDimensions();
  const avatarSize = width * 0.65;

  return (
    <BaseModal size="half" visible={!!selected}>
      {selected && (
        <View className="w-full flex-col gap-y-4 relative">
          <TransformationPoster
            image={selected.image}
            contentPosition="top"
            width="100%"
            height={avatarSize}
          />
          <View className="px-5 gap-y-5">
            <TransformationTitle title={selected.name} />

            <TransformationStat ki={selected.ki} />
          </View>

          <BaseButtonIcon
            onPress={onPress}
            size={20}
            icon="x"
            color="text-white"
            className="absolute bg-black/50 top-4 right-4 size-10 items-center justify-center rounded-full"
          />
        </View>
      )}
    </BaseModal>
  );
};

export default TransformationDetailModal;
